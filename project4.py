import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load the dataset
hospital_data = pd.read_csv('hospital_bed_data.csv')

# Select relevant columns for prediction
features = ['Total Free Bed', 'Total Free Critical Bed (without ventilator)',
            'Total Free Critical Bed (with ventilator)', 'Total Free Non-Critical Bed']
target = 'Available Free Non-Critical Bed'

# Filter out rows with missing or invalid values
hospital_data_clean = hospital_data.dropna(subset=[target])

# Extract features (X) and target (y)
X = hospital_data_clean[features]
y = hospital_data_clean[target]

# Train-test split for the model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict bed availability on the test set
y_pred = model.predict(X_test)

# Visualize the results: Predicted vs Actual available beds in a bar chart
plt.figure(figsize=(10, 6))
index = range(len(y_test))

plt.bar(index, y_test, label='Actual', alpha=0.6)
plt.bar(index, y_pred, label='Predicted', alpha=0.6)

plt.xlabel('Hospitals (Test Set)')
plt.ylabel('Available Free Non-Critical Beds')
plt.title('Predicted vs Actual Bed Availability in Hospitals')
plt.legend()
#plt.show()
image_path = 'bed.png'
plt.savefig(image_path)

