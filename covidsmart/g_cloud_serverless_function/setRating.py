import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore



def hello_world(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

        cred = credentials.Certificate('firebase.json')
        firebase_admin.initialize_app(cred)

        db = firestore.client()


        
        def setRating(tripid:str):
            doc_ref = db.collection('Trips').document(tripid)
            encounters = u'{}'.format(doc_ref.get({u'encounters'}).to_dict()['encounters'])
            rating = 'N/A'
            encounters = int(encounters)
            if encounters == 0:
                rating = 'S'
            elif 5 > encounters > 0:
                rating = 'A'
            elif 9 > encounters > 4:
                rating = 'B'
            elif 15 > encounters > 8:
                rating = 'C'
            else:
                rating = 'D'

            return(rating)
    request_json = request.get_json()
    if request.args and 'message' in request.args:
        setRating(requests.args.get('message'))
    elif request_json and 'message' in request_json:
        setRating(rerequests_json['message'])


    else:
        return f'Hello World!'
