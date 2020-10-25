def hello_world(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    if request.args and 'date' and 'location' and 'encounters' in request.args:
        date = request.args.get('date')
        location = request.args.get('location')
        encounters = request.args.get('encounters')



    

        scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]

        creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)

        client = gspread.authorize(creds)

        sheet = client.open("test").sheet1

        data = sheet.get_all_records()


        insertRow = [date, location, encounters]
        sheet.insert_row(insertRow)

