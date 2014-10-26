from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

def index(request):
	testtext = 'dataviewer text'
	template = loader.get_template('dataviewer/index.html')
	context = RequestContext(request, {
		'testext': testtext,
	})
	return HttpResponse(template.render(context))
# Create your views here.
