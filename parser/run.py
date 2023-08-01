import json
from api import get_info

def read_product_file(file_path):
    try:
        with open(file_path, "r") as product_file:
            return json.load(product_file)
    except FileNotFoundError:
        return []

if __name__ == "__main__":
    newData = get_info()
    existing_data = read_product_file("../src/data/mockup/new_news.json")
    old_data = read_product_file("../src/data/mockup/old_news.json")
    if len(existing_data) == 0:
        with open("../src/data/mockup/new_news.json", "w") as product_file:
            json.dump(newData, product_file, ensure_ascii=False, indent=2)
            product_file.write("\n")
    else:
        differences = []
        field_to_compare = 'title'
        for existing_item in existing_data:
            found = False
            for new_item in newData:
                if new_item[field_to_compare] == existing_item[field_to_compare]:
                    print(new_item[field_to_compare] == existing_item[field_to_compare])
                    found = True
                    break
            if not found:
                differences.append(existing_item)
        print(differences)
        oldData = differences + old_data
        with open("../src/data/mockup/old_news.json", "w") as product_file:
                json.dump(oldData, product_file, ensure_ascii=False, indent=2)
                product_file.write("\n")
        with open("../src/data/mockup/new_news.json", "w") as product_file:
                json.dump(newData, product_file, ensure_ascii=False, indent=2)
                product_file.write("\n")
    print("done!")