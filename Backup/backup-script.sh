
#!/usr/bin/env bash

set -x

folder_name=$(date +%H-%d-backup)

time=$(date)
day_of_month=$(date +%d)
date_of_year=$(date +%d%m)

daily_storage=amnodejs-backups

gsutil -m cp -r /mnt/backups/${folder_name}/ gs://${daily_storage}

 
