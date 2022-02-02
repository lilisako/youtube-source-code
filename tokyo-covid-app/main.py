import streamlit as st
import pandas as pd

st.title("COVID19 Tokyo App")
data = pd.read_json("https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/development/data/positive_rate.json")
data = pd.json_normalize(data['data'])

st.dataframe(data)
choice = st.selectbox("Which data do you want to see?", ['positive_count', 'negative_count', 'positive_rate'])
st.line_chart(data[['diagnosed_date', choice]][-40:].set_index('diagnosed_date'))
