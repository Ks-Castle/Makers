import json
from mapleNews import get_all_info, get_event_info, get_feature_info


def read_json_file(file_path):
    try:
        with open(file_path, "r") as json_file:
            return json.load(json_file)
    except FileNotFoundError:
        return []


def write_json_file(file_path, data):
    with open(file_path, "w") as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)
        json_file.write("\n")


def compare_and_update(
    existing_data,
    new_data,
    field_to_compare,
    old_file_path,
    new_file_path,
    history_data,
):
    differences = []

    for existing_item in existing_data:
        found = any(
            new_item[field_to_compare] == existing_item[field_to_compare]
            for new_item in new_data
        )
        if not found:
            differences.append(existing_item)

    old_data = [
        item
        for item in existing_data
        if item[field_to_compare] in (d[field_to_compare] for d in differences)
    ]
    old_data += history_data
    write_json_file(old_file_path, old_data)
    write_json_file(new_file_path, new_data)


def get_new_feature(
    existing_data,
    new_data,
    field_to_compare,
):
    diffs = []

    for new_item in new_data:
        found = any(
            existing_item[field_to_compare] == new_item[field_to_compare]
            for existing_item in existing_data
        )
        if not found:
            diffs.append(new_item)

    print(diffs)
    write_json_file("../discord/new_update.json", diffs)


if __name__ == "__main__":
    new_data = get_all_info()
    new_event_data = get_event_info()
    new_feature_data = get_feature_info()

    existing_data = read_json_file("../src/data/mockup/new_news.json")
    old_data = read_json_file("../src/data/mockup/old_news.json")

    existing_event_data = read_json_file("../src/data/mockup/new_events.json")
    old_event_data = read_json_file("../src/data/mockup/old_events.json")

    existing_feature_data = read_json_file("../src/data/mockup/new_features.json")
    old_feature_data = read_json_file("../src/data/mockup/old_features.json")

    if len(existing_data) == 0:
        write_json_file("../src/data/mockup/new_news.json", new_data)
    else:
        get_new_feature(
            existing_data,
            new_data,
            "title",
        )
        compare_and_update(
            existing_data,
            new_data,
            "title",
            "../src/data/mockup/old_news.json",
            "../src/data/mockup/new_news.json",
            old_data,
        )

    if len(existing_event_data) == 0:
        write_json_file("../src/data/mockup/new_events.json", new_event_data)
    else:
        compare_and_update(
            existing_event_data,
            new_event_data,
            "title",
            "../src/data/mockup/old_events.json",
            "../src/data/mockup/new_events.json",
            old_event_data,
        )

    if len(existing_feature_data) == 0:
        write_json_file("../src/data/mockup/new_features.json", new_feature_data)
    else:
        compare_and_update(
            existing_feature_data,
            new_feature_data,
            "title",
            "../src/data/mockup/old_features.json",
            "../src/data/mockup/new_features.json",
            old_event_data,
        )
    print("done!")
