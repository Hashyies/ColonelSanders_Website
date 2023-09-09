from flask import Flask, render_template, request

app = Flask(__name__, template_folder='views')
app.debug = True

@app.route('/')
def index():
    # user_ip = request.remote_addr
    # print(f"User's IP address: {user_ip}")
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
