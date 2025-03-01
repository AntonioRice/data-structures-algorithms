import os
import requests

countries = [  
#     "afghanistan", "albania", "algeria", "andorra", "angola", "antigua-and-barbuda",
#     "armenia", "austria", "azerbaijan", "bahamas",
#     "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin",
#     "bhutan", "bolivia", "bosnia-and-herzegovina", "botswana", "brunei",
#     "bulgaria", "burkina-faso", "burundi", "cabo-verde", "cambodia", "cameroon",
#     "central-african-republic", "chad", "chile", "colombia",
#     "comoros", "congo-democratic-republic", "congo-republic", "costa-rica", "croatia",
#     "cuba", "cyprus", "czech-republic", "denmark", "djibouti", "dominica",
#     "dominican-republic", "ecuador",  "el-salvador", "equatorial-guinea",
#     "eritrea", "estonia", "eswatini", "ethiopia", "fiji", "finland",
#     "gabon", "gambia", "georgia", "ghana", "grenada",
#     "guatemala", "guinea", "guinea-bissau", "guyana", "haiti", "honduras",
#     "hungary", "iceland", "indonesia", "iran", "iraq", "ireland", "israel",
#    "ivory-coast", "jamaica","jordan", "kazakhstan", "kenya",
#     "kiribati", "korea-north","kosovo", "kuwait", "kyrgyzstan",
#     "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein",
#     "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives",
#     "mali", "malta", "marshall-islands", "mauritania", "mauritius", 
#     "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco",
#     "mozambique", "myanmar", "namibia", "nauru", "nepal", 
#     "new-zealand", "nicaragua", "niger", "nigeria", "north-macedonia", "norway",
#     "oman", "pakistan", "palau", "palestine", "panama", "papua-new-guinea",
#     "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania",
#     "rwanda", "saint-kitts-and-nevis", "saint-lucia",
#     "saint-vincent-and-the-grenadines", "samoa", "san-marino", "sao-tome-and-principe",
#     "saudi-arabia", "senegal", "serbia", "seychelles", "sierra-leone", "singapore",
#     "slovakia", "slovenia", "solomon-islands", 
#     "south-sudan", "sri-lanka", "sudan", "suriname", "sweden", "switzerland",
#     "syria", "taiwan", "tajikistan", "tanzania", "thailand", "timor-leste", "togo",
#     "tonga", "trinidad-and-tobago", "tunisia", "turkey", "turkmenistan", "tuvalu",
#     "uganda", "ukraine", "united-arab-emirates", 
#     "uruguay", "uzbekistan", "vanuatu", "vatican-city", "venezuela", "vietnam",
#     "yemen", "zambia", "zimbabwe", "brunei-darussalam", "democratic-republic-of-the-congo",
#     "republic-of-the-congo", "swaziland-eswatini", "north-korea",
#     "united-arab-emirates-uae", "cape-verde", "the-bahamas",
#     "federated-states-of-micronesia"
]

# Base URL for the flags
base_url = "https://www.flagcolorcodes.com/images/webp/"

# Directory to save downloaded flags
output_dir = "flags"
os.makedirs(output_dir, exist_ok=True)

# Function to download a flag
def download_flag(country_name):
    url = f"{base_url}{country_name}.webp"
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()  # Check for HTTP request errors
        file_path = os.path.join(output_dir, f"{country_name}.webp")
        with open(file_path, "wb") as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
        print(f"Downloaded: {country_name}")
    except requests.RequestException as e:
        print(f"Failed to download {country_name}: {e}")

# Download all flags
for country in countries:
    download_flag(country)