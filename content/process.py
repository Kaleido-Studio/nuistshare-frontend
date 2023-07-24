import os
import json

with open("./data/raw.json", encoding='utf-8') as f:
    data = json.loads(f.read())

mapping = {}
dict = {}

for item in data:
    l1, l2, title = item['l1_title'], item['l2_title'], item['title']
    path = f"./data/{l1}/{l2}.json"
    if not l1 in dict:
        dict[l1] = []
    if not l2 in dict[l1]:
        dict[l1].append(l2)
    to_write = {"title": title, "target": [
        {
            "type": "cloudreve",
            "link": item['href']
        }
    ]}
    if path not in mapping:
        mapping[path] = []
    mapping[path].append(to_write)

for i in dict:
    # create folders using `dict`
    if not os.path.exists(f"./data/{i}"):
        os.mkdir(f"./data/{i}")


for i in mapping:
    with open(i, 'x', encoding='utf-8') as f:
        f.write(json.dumps(mapping[i], ensure_ascii=False))
