#!/bin/bash


# set the directory to the dir in which this script resides
newPath=`echo $0 | awk '{split($0, a, ";"); split(a[1], b, "/"); for(x = 2; x < length(b); x++){printf("/%s", b[x]);} print "";}'`
cd "./$newPath"

# TODO: replace all instances of "PICAROONTEMPLATE" in files and files names with ProjectName
# TODO: replace all instances of "picaroontemplate" in files and files names with projectname

set -e

