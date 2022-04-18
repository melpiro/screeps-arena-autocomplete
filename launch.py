# read the whole contant of the main.mjs file
# and replace all occurance of "./API/" string with "/"
# finally write the new content to the file passed as parameter of the script

import sys

from_path = sys.argv[1]
file = open("main.mjs", "r")
content = file.read()
file.close()

content = content.replace("./JS/", "/")

dest_path = sys.argv[2]
dest = open(dest_path, "w")
dest.write(content)
dest.close() 
