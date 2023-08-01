import requests
import bs4
from utils.convertDate import get_relative_date

def get_data(url, feature):
    whole_source = ""
    arr = []
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit 537.36 (KHTML, like Gecko) Chrome",
        "Accept": "text_html,application_xhtml+xml,application_xml;q=0.9,image_webp,**/**;q=0.8"
    }
    response = requests.get(url, headers=headers)
    whole_source = whole_source + response.text
    soup = bs4.BeautifulSoup(whole_source, 'html.parser')

    if feature:
        news_items = soup.select("body > div.global-content > div.section.section--ghosted-grey > div > div > div.component.component-featured-news > ul > li")
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
    else:
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

def get_all_info():
    URL = "https://maplestory.nexon.net/news"
    return get_data(URL, False)

def get_event_info():
    URL = "https://maplestory.nexon.net/news/events#news-filter"
    return get_data(URL, False)

def get_feature_info():
    URL = "https://maplestory.nexon.net/news"
    return get_data(URL, True)



