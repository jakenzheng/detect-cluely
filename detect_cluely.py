import os
import subprocess

cluely_paths = [
    "/Applications/Cluely.app",
    "/Applications/Cluely.app/Contents/Frameworks/Cluely Helper.app/Contents/MacOS/Cluely Helper",
    os.path.expanduser("~/Library/Application Support/cluely/Shared Dictionary/db"),
    os.path.expanduser("~/Library/Application Support/cluely/Trust Tokens"),
    os.path.expanduser("~/Library/Application Support/cluely/Cookies")
]

found = False
for path in cluely_paths:
    if os.path.exists(path):
        print(f"Found: {path}")
        found = True

if found:
    print("Cluely is installed or has run on this system.")
else:
    print("Cluely not detected.")

def is_cluely_running():
    result = subprocess.run(['ps', 'aux'], stdout=subprocess.PIPE, text=True)
    return 'Cluely' in result.stdout

if is_cluely_running():
    print("Cluely is running!")
else:
    print("Cluely is NOT running.") 