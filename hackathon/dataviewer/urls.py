from django.conf.urls import patterns, url

from dataviewer import views

urlpatterns = patterns('',
	url(r'^$', views.index, name='index'),
	url(r'^honeybadger/',views.honeybadger, name='honeybadger')
)