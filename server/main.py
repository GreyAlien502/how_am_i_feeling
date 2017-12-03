import cherrypy

from google_api import getSentiment

class server():
	@cherrypy.expose(['api'])
	def api(self,message):
		return str(getSentiment(message))

if __name__ == '__main__':
	cherrypy.quickstart(server(),'/')
