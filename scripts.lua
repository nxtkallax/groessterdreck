-- Zufallsindex und Bild setzen
local bilder = {
    "/kippenfisch.jpg",
    "/toshinokyouko.png"
}
local zufallsIndex = math.random(#bilder)
local randomImageElement = document:getElementById("randomImage")
randomImageElement.src = bilder[zufallsIndex]

-- Funktion zum Abspielen des Sounds
function playSound()
    local image = document:getElementById("randomImage")
    local currentSrc = image.src
    if currentSrc:find("toshinokyouko.png") then
        local audio = document:getElementById("toshinokyouko")
        audio:play()
    else
        local audio = document:getElementById("yeehaw")
        audio:play()
    end
end
