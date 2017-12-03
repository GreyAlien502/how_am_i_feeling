from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

client = language.LanguageServiceClient()

def getSentiment(text):
	return client.analyze_sentiment(
		document=types.Document(
			content=text,
			type=enums.Document.Type.PLAIN_TEXT
		)
	).document_sentiment.score
