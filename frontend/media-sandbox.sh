#!/bin/bash
# =============================================================================
# MEDIA-SANDBOX.SH - Vetted Secure Media Editing Environment
# =============================================================================
set -e

# COLOR CODES
GREEN='[0;32m'
YELLOW='[1;33m'
PURPLE='[0;35m'
CYAN='[0;36m'
NC='[0m'

clear
echo -e "${PURPLE}==============================================================================${NC}"
echo -e "                MAVJ MEDIA SANDBOX - SECURE EDITING ENVIRONMENT"
echo -e "${PURPLE}==============================================================================${NC}"

# 1. DIRECTORY STRUCTURE
BASE_DIR="$HOME/MediaSandbox"
mkdir -p "$BASE_DIR"/{Inbox,Projects,Exports,Archive,Config,Temp}
chmod 700 "$BASE_DIR"

# 2. DOCKER MANIFESTATION
docker stop media-sandbox 2>/dev/null || true
docker rm media-sandbox 2>/dev/null || true

PASSWORD=$(openssl rand -base64 12 | tr -d "=+/" | cut -c1-16)

docker run -d   --name media-sandbox   -p 3001:3001   -v "$BASE_DIR/Inbox":/media/inbox:ro   -v "$BASE_DIR/Projects":/media/projects:rw   -v "$BASE_DIR/Exports":/media/exports:rw   -v "$BASE_DIR/Config":/config:rw   -v "$BASE_DIR/Temp":/tmp:rw   -e CUSTOM_USER=editor   -e PASSWORD="$PASSWORD"   --memory=4g   --cpus=2   --restart unless-stopped   lscr.io/linuxserver/openshot:latest

# 3. ACCESS SCRIPTS
cat > "$BASE_DIR/start-sandbox.command" << INNEREOF
#!/bin/bash
open https://localhost:3001
echo "Login: editor / Pass: $PASSWORD"
INNEREOF
chmod +x "$BASE_DIR/start-sandbox.command"

echo -e "${GREEN}✅ SANDBOX READY!${NC}"
echo -e "Access Key: ${CYAN}$PASSWORD${NC}"
sleep 5
open "https://localhost:3001"
