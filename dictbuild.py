import json

i = input("날짜가 어떻게 되나요? : ")
dictionary = list()
print("S 라고 대답하면 멈춥니다.")
while True:
    header = input("몇번 문항인가요? : ")
    if str(header) == "S":
        break
    description = input("답이 무엇인가요? : ")
    if str(description) == "S":
        break
    data = {"header": header, "description": description}
    dictionary.append(data)
with open("./src/file/DB.json", "r", encoding="utf8") as f:
    JsonData = json.load(f)
JsonData["DB"][str(i)] = dictionary
with open("./src/file/DB.json", "w", encoding="utf8") as t:
    json.dump(JsonData, t, indent="\t", ensure_ascii=False)