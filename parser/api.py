from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

url = "https://maplestory.nexon.net/news"

browser = webdriver.Firefox()
browser.get(url)


news_view_more_button = browser.find_element("#newsViewMore")
news_view_more_button.click()

browser.quit()
