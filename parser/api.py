from datetime import datetime, timedelta
import requests
import bs4

def get_info():
    whole_source = ""
    arr = []
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit 537.36 (KHTML, like Gecko) Chrome",
        "Accept": "text_html,application_xhtml+xml,application_xml;q=0.9,image_webp,**/**;q=0.8"
    }
    URL = "https://maplestory.nexon.net/news"
    response = requests.get(URL, headers=headers, verify=False)
    whole_source = whole_source + response.text
    soup = bs4.BeautifulSoup(whole_source, 'html.parser')
    news_items = soup.select("body > div.global-content > div.component.component-news-filterable > div > div > div.news-wrapper > ul > li")
    for item in news_items:
        title = item.select_one("div.text > h3 > a").text
        content = item.select_one("div.text > p:nth-child(2)").text
        photo_style = item.select_one("div.photo")['style']
        photo_url = photo_style.split('url(')[1][:-1]
        link = "https://maplestory.nexon.net/" + item.select_one("div.text > h3 > a")['href']
        time_str = item.select_one("div.text > p.timestamp").text
        actual_date = get_relative_date(time_str)
        arr.append({
            'title': title,
            'content': content,
            'time': time_str,
            'actualDate': actual_date,  
            'photo': photo_url,
            'link': "https://maplestory.nexon.net/" + link
        })
    return arr

def get_relative_date(date_str):
    if "days ago" in date_str:
        days_ago = int(date_str.split(" ")[0])
        result_date = datetime.now() - timedelta(days=days_ago)
        return result_date.strftime("%b %d, %Y")
    elif "minutes" in date_str or "hours" in date_str:
        return datetime.now().strftime("%b %d, %Y")
    else:
        return date_str