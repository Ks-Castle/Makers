from selenium import webdriver

url = "https://makers-plum.vercel.app/Home"

browser = webdriver.Firefox()
browser.get(url)

print(browser)
