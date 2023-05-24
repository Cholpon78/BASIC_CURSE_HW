# Выводим приветствие
echo "Hello Student!"

# Просим ввести имя пользователя
echo "Введите ваше имя:"
read name

# Выводим приветствие с именем пользователя
echo "Welcome to terminal, $name!"

# Создаем папку "test" в каталоге "/tmp"
mkdir /tmp/test

# Создаем файл "mydate.txt" в папке "/tmp"
touch /tmp/test/mydate.txt

# Записываем текущее время в файл "mydate.txt"
date +"%T" > /tmp/test/mydate.txt

# Выводим сообщение "Сохраняем данные"
echo "Сохраняем данные"

