# SailBot - Version 4 Alpha
Introducing, Sailbot v4.0
This is the most likely final re-write of SB.
The bot is written using TypeScript, and has a lot of head functionality that is not actually critical to SB.
# Main Features
Support for Running on Docker
Support for PM2 Deployment
Written with ESM for compatibility
Support Sharding + Clustering (Not Necessarily Required, but just there for safe-proofing)

# How to Run the Bot for Development
SailBot V4 supports multiple run modes:
1. Normal Mode
Type `npm start`
This starts a single instance of the bot
2. Manager Mode
Type `npm run start:manager`
Starts a ShardManager which will run multiple bot shards at once
3. PM2 Mode
Type `npm run start:pm2`
This mode is similar to Manager Mode but uses PM2 instead of the built-in API (not API-v2, custom written API for sharding)

# To-Do
Implement Full APIv2 into Bot
Add Required Slash Commands
Optimize Docker Deploy 