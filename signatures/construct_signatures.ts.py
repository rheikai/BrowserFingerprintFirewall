# cur dir = ./BrowserFingerprintFirewall

signatures = {}
cur_genre = ""
for line in [line.strip() for line in open("./signatures/signatures.txt").readlines()]:
    if len(line) == 0:
        continue
    if line[0] == "#":
        cur_genre = line[1:]
        signatures[cur_genre] = set()
    else:
        signatures[cur_genre].add(line)


signatures_ts = """
function getFingerprintingScore(src:string):number{
let score = 0;
"""
for genre, sigs in signatures.items():
    signatures_ts += "//{genre}\n".format(genre=genre)
    if len(sigs) == 0:
        continue
    score_per_sig = int(1000/len(sigs))

    for sig in sigs:
        quote_mark = '"'
        if '"' in sig:
            quote_mark = "'"
        signatures_ts += "if(src.includes({quote_mark}{sig}{quote_mark}))".format(
            quote_mark=quote_mark, sig=sig)
        signatures_ts += "{"
        signatures_ts += "score +={score_per_sig};".format(
            score_per_sig=score_per_sig)
        signatures_ts += "}\n"

signatures_ts += "return score;}"

open("./src/background/signatures.ts", "w").write(signatures_ts)
