import sqlite3
conn=sqlite3.connect("jarvis.db")
cursor=conn.cursor()
query= "CREATE TABLE IF NOT EXISTS sys_command(id integer primary key,name VARCHAR(100),path VARCHAR(1000))"
cursor.execute(query)

app_name="android studio"
cursor.execute('SELECT path FROM sys_command WHERE name IN (?)', (app_name,))
results=cursor.fetchall()
print(results[0][0])