import os
import json

# 获取当前目录下的所有文件的相对路径
def get_files_relative_path(directory):
    JS_file_paths = []
    NonJS_file_paths = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.split('.')[-1] == "js":
                # if file == "index.js": continue
                file_path = os.path.relpath(os.path.join(root, file), directory).replace('\\', '/')
                JS_file_paths.append(file_path)
            else:
                file_path = os.path.relpath(os.path.join(root, file), directory).replace('\\', '/')
                NonJS_file_paths.append(file_path)
    return JS_file_paths, NonJS_file_paths

# 将文件路径写入到json文件中
def write_to_json(JS_paths, NonJS_paths, output_file):
    data = {
        "dependencyJS": JS_paths,
        "dependencyData": NonJS_paths
    }
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=4)

# 指定文件夹路径
directory_path = './wechatWebGL1'

# 获取所有文件的相对路径
JS, NonJS = get_files_relative_path(directory_path)

# 将文件路径写入到json文件中
output_file_path = 'output.json'
write_to_json(JS, NonJS, output_file_path)