from flask import Flask, render_template, request
from signalHandler import read_signal

app = Flask('MyApp')

@app.route("/")
def index():
  # Read the value of the sensor
   # index = 0
   # signal = True
   # while True:
   #    if index == 0: 
   #       signal = read_signal(index) 
   #       index += 1

   #    else:
   #       signal = read_signal(index)
   #       index = 0

   return render_template('index.html', signal = False)

app.run(debug=True)  
