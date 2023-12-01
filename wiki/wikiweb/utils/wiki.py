import wikipedia

def get_summary(search_text="", lang="en"):
    wikipedia.set_lang(lang)
    summary = wikipedia.summary(search_text)
    return summary