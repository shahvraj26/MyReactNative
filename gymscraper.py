from flask import Flask
from selenium import webdriver
from bs4 import BeautifulSoup
import time
import requests
import json

app = Flask(__name__)

def scrape_facility_data(url, filename):
    # Launch the Chrome browser
    driver = webdriver.Chrome()

    # Load the webpage
    driver.get(url)

    # Wait for dynamic content to load (adjust the sleep time as needed)
    time.sleep(3)

    # Get the page source after dynamic content has loaded
    page_source = driver.page_source

    # Parse HTML content
    soup = BeautifulSoup(page_source, 'html.parser')

    # Find the elements containing the facility capacity
    location_info_div = soup.find("div", class_="js-fac__locationinfo")

    if location_info_div:
        # Find divs where class is "c-meter"
        capacity_divs = location_info_div.find_all("div", class_="c-meter")

        # Create a list to hold the facility data
        facility_data = []

        for capacity_div in capacity_divs:
            # Find title, meter number, and status
            title = capacity_div.find("span", class_="c-meter__title").text.strip()
            meter_element = capacity_div.find("meter", class_="c-meter__meter")
            status = capacity_div.find("span", class_="c-meter__status").text.strip() if capacity_div.find("span", class_="c-meter__status") else ""
            if meter_element:
                available_count = meter_element.text.strip()
                # Append the data to the list
                facility_data.append({'title': title, 'capacity': available_count, 'lastupdated': status})

        # Close the browser
        driver.quit()

        # Save the JSON data to a file
        with open(filename, 'w') as file:
            json.dump(facility_data, file)

        print(f'Data from {url} saved successfully.')

    else:
        # Close the browser
        driver.quit()
        print(f'Error: Location info div not found for {url}')


@app.route('/', methods=['GET'])
def get_facility_data():
    # URLs and corresponding filenames
    urls = [
        ("https://recsports.osu.edu/fms/facilities/rpac", "screens/rpac_data.json"),
        ("https://recsports.osu.edu/fms/facilities/arc", "screens/arc_data.json"),
        ("https://recsports.osu.edu/fms/facilities/nrc", "screens/nrc_data.json"),
        ("https://recsports.osu.edu/fms/facilities/jos", "screens/jos_data.json"),
        ("https://recsports.osu.edu/fms/facilities/jon", "screens/jon_data.json")
    ]

    # Scrape data from each URL and save to corresponding file
    for url, filename in urls:
        scrape_facility_data(url, filename)

    return 'Data scraped and saved to files.'

if __name__ == '__main__':
    while True:
        app.run(debug=True)
        time.sleep(3000)