from flask import Flask, jsonify, render_template, url_for, request, redirect
import openai
import apikey
openai.api_key = apikey.apikey_openai

app = Flask(__name__, static_url_path='/static')
 
@app.route('/')
def index():
    return render_template('index.html')

# POSTデータを取得
@app.route('/data/', methods=['POST'])
def post_user_data():
    category = request.form['category']
    color = request.form['color']
    # return 'category:' + category + ', color' + color
    # print(category,'：カテゴリー')
    # print(color,'：カラー★★★')
    input = color + 'の' + category + 'を使った春のおすすめコーディネートを箇条書きで3つ教えてください。箇条書きの冒頭は「★」ではじめてください。'
    print(input)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "あなたは優秀なスタイリストです。"},
            {"role": "user", "content": str(input) }, 
        ]
    )
    return render_template('result.html',
                           response=response["choices"][0]["message"]["content"] ,category=category, color=color)


    # return(response["choices"][0]["message"]["content"]) #返信のみを出力
    # print(response["choices"][0]["message"]["content"]) #返信のみを出力


 
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8888, debug=True)