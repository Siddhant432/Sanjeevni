import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load your data
df = pd.read_csv('hospital_bed_data.csv')

# Select relevant columns
df = df[['Hospital Name', 'Total Free Bed', 
         'Available Free Non-Critical Bed', 'Available Free Critical Bed (with ventilator)', 
         'Available Free Critical Bed (without ventilator)']]

# Replace any missing or invalid data (-1) with 0
df = df.replace(-1, 0)

# Features (Total Free Beds) and target (Available Non-Critical and Critical Beds)
X = df[['Total Free Bed']]
y = df['Available Free Non-Critical Bed'] + df['Available Free Critical Bed (with ventilator)'] + df['Available Free Critical Bed (without ventilator)']

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict bed availability
df['Predicted Available Beds'] = model.predict(df[['Total Free Bed']])

# Plot the predicted available beds in a bar chart
plt.figure(figsize=(12, 6))
plt.bar(df['Hospital Name'], df['Predicted Available Beds'], color='green')
plt.xlabel('Hospital Name', fontsize=12)
plt.ylabel('Predicted Available Beds', fontsize=12)
plt.title('Bed Availability in Hospitals', fontsize=14)
plt.xticks(rotation=90)
plt.tight_layout()
#plt.show()
image_path = 'bed_availability.png'
plt.savefig(image_path)
