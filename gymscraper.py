from flask import Flask, jsonify
from selenium import webdriver
from bs4 import BeautifulSoup
import time

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_facility_data():
    # Launch the Chrome browser
    driver = webdriver.Chrome()

    # URL of the website to scrape
    url = "https://recsports.osu.edu/fms/facilities/rpac"

    # Load the webpage
    driver.get(url)

    # Wait for dynamic content to load (adjust the sleep time as needed)
    time.sleep(5)

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

        # Return the facility data as JSON
        return jsonify(facility_data)

    else:
        # Close the browser
        driver.quit()

        return jsonify({'error': 'Location info div not found'})

if __name__ == '__main__':
    app.run(debug=True)
