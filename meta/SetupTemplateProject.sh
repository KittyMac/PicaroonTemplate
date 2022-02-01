#!/bin/sh

set -e

# set the directory to the parent of the dir in which this script resides
newPath=`echo $0 | awk '{split($0, a, ";"); split(a[1], b, "/"); for(x = 2; x < length(b); x++){printf("/%s", b[x]);} print "";}'`
cd "./$newPath/../"

# Project name is the name of the parent folder
new=`basename "$PWD"`
new2="$(tr [A-Z] [a-z] <<< "$new")"

old="PICAROONTEMPLATE"
old2="$(tr [A-Z] [a-z] <<< "$old")"

echo "Changing $old to $new..."

shouldProcessPath () {
	# do not allow changing of this script
	if [[ $file == *SetupTemplateProject.sh* ]]
	then
		#echo "Ignoring $file"
	  	return 0
	fi
	
	# do not allow changing of anything in .git
	if [[ $file == *.build* ]]
	then
		#echo "Ignoring $file"
	  	return 0
	fi
    
	# do not allow changing of anything in .build
	if [[ $file == *.git* ]]
	then
		#echo "Ignoring $file"
	  	return 0
	fi
    
    return 1
}

# run through all directories, change them first
find . -type d -print 2>/dev/null | while read file
do
	if [[ shouldProcessPath == 0 ]]
    then
        continue
    fi
	
	# Rename the directory itself
	if [[ $file == *$old* ]]
	then
		newName=`echo $file | sed "s/$old/$new/g"`
		echo "Renaming directory $file to $newName"
		#mv "$file" "$newName"
	fi
done

find . -type f -print0 | xargs -0 file | cut -f1 -d: 2>/dev/null | while read file
do
	if [[ shouldProcessPath == 0 ]]
    then
        continue
    fi
    
	newName=`echo $file | sed "s/$old/$new/g"`
	echo "Renaming $file to $newName"
	#mv "$file" "$newName"
	#sed -i "" -e "s/$old/$new/g" -e "s/$old2/$new2/g" "$newName"
done