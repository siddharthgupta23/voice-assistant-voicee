
import pyttsx3
import speech_recognition as sr
import eel
import time
def speak(text):
    text=str(text)
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id)
    engine.setProperty('rate', 174)
    # eel.DisplayMessage(text)  

    engine.say(text)
    # eel.recieverText(text)
    engine.runAndWait()


def takencommand():
    r = sr.Recognizer()  
    with sr.Microphone() as source:
        print('listening . . .')
        eel.DisplayMessage('listening . . .')
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source, 10, 6)
    try:
        print('recognizing')
        eel.DisplayMessage('recognizing')
        query = r.recognize_google(audio, language="en-in")
        print(f"user said: {query}")
        eel.DisplayMessage(query)                                
        time.sleep(2)
        
    except Exception as e:
        return ""
    return query.lower()

# text = takencommand()
# speak(text)

@eel.expose
def allCommands(message=1):
    if message==1:
        query=takencommand()
        print(query)
        eel.senderText(query)
    else:
        query=message
        eel.senderText(query)


    try:
        
        
        if "open" in query:
            print("Command contains 'open': i-run")
            from engine.feature import openCommand 
            openCommand(query)
        elif "on youtube":
            from engine.feature import playYouTube
            playYouTube(query)
        else:
                from engine.feature import chatBot
                chatBot(query)
        
    except:
        print("error")


    eel.ShowHood()