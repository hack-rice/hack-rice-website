'''
A TINY HACK.RICE COMPILER

 Compiler for the hack.rice website. Builds a site based upon a single
 template file and an arbitrary number of content files in the |content/|
 directory. Each content file will be built into a separate static index file
 in a separate directory (rules.html --> rules/index.html and can be linked
 to without the specified file name.  Content files can contain the following
 within their HTML code.

   "[DIR]" The compiler builds a bath to the correct file locations for
           shared resources. The top-level index would be compiled with
           [DIR] := "". All secondary content files would be compiled with
           [DIR] := "../" so that they can access the correct files.
'''

import os

# This is the top-level (or relative address) to the template file
TEMPLATE_FILE = "template.html"

def make_toplevel_directory_if_necessary(name):
    ''' If the top level directory |name| does not exist, make it. '''

    # Ignore the index file, we'll put that at the toplevel
    if (name == "index"): return

    # Make the directory if it doesn't already exist
    directory = "../" + name
    if not os.path.exists(directory):
        print "[c] making a top level directory called", name
        os.makedirs(directory)

def make_file_with_content(name, content):
    ''' Makes a file with the given name and content. '''

    print "[c] outputting content into", name, "directory"
    if name == "index":
        filea = open("../index.html", 'w+')
    else:
        filea = open("../"+name+"/index.html", 'w+')
    filea.write(content)
    filea.close()

def main():
    print "[c] starting the process of website compilation"

    directory = "content/"
    for file_name in os.listdir(directory):
        print "[c] found file", file_name

        template = open("template.html").read()
        dir_prefix = "../" if (file_name != "index.html") else ""
        template = template.replace("[DIR]", dir_prefix)
        template = template.replace("<!--CONTENT-->", open(directory+file_name).read())

        name = file_name[:-5]
        make_toplevel_directory_if_necessary(name)
        make_file_with_content(name, template)


main()