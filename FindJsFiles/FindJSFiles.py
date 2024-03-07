import os

# Replace 'your_folder_path' with the path to the folder you want to scan
folder_path = '../build/wechatgameCopy'
prefix_to_remove = folder_path + "/"

# List to hold the paths of .js files
js_files = []

# Walk through all the directories and files in the given folder
for root, dirs, files in os.walk(folder_path):
    for file in files:
        if file.endswith('.js'):
            # Construct the full path
            full_path = os.path.join(root, file)
            relative_path = full_path.replace("\\", '/')
            # Remove the prefix
            relative_path = relative_path.replace(prefix_to_remove, '', 1)
            # Add a tab in front of the file name
            js_files.append('\t"' + relative_path + '",')

# Write the list of .js files to a text file, one per line
with open('js_files_list.txt', 'w') as f:
    f.write('\n'.join(js_files))

print('The list of .js files has been written to js_files_list.txt')