from django.shortcuts import render
from django.http import HttpResponse
import json
from .utils import wiki

# Create your views here.
def api(req):
    search_query = req.GET.get("search", "")
    lang = req.GET.get("lang", "")
    summary = wiki.get_summary(search_query, lang)
    output = json.dumps({"search": search_query, "summary": summary})
    response = HttpResponse(output, content_type='application/json')
    return response