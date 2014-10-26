from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import json

def index(request):
	testtext = 'dataviewer text'
	template = loader.get_template('dataviewer/index.html')
	context = RequestContext(request, {
		'testext': testtext,
	})
	return HttpResponse(template.render(context))
# Create your views here.

@csrf_exempt
def honeybadger(request):
	if request.is_ajax():
		file_column_index = request.GET["index"]


	return JsonResponse({"value":"10"})