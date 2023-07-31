import json
from pprint import pprint
from time import sleep as delay
from api import get_info

if __name__ == "__main__":
    data = get_info()
    delay(0.1)
    updated = False
    if len(data):
        updated = True
    if updated:
        with open("../src/data/mockup/mapleEvent.json", "w") as product_file:
            json.dump(data, product_file, ensure_ascii=False, indent=2)
            product_file.write("\n")
    print("done!")
