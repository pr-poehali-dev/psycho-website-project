import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Brain" className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-slate-800">
                Анна Кузнецова
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                О себе
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#blog"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Блог
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                🧠 Профессиональная психологическая помощь
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Путь к внутренней
                <span className="text-indigo-600"> гармонии</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Индивидуальная и семейная терапия для взрослых и детей. Работаю
                с тревожностью, депрессией, семейными конфликтами и детскими
                проблемами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Связаться со мной
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="/img/e197b99d-12d5-475f-9d83-5e3a3b7d6fda.jpg"
                alt="Анна Кузнецова - психолог"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              О себе
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Более 10 лет помогаю людям находить внутренний баланс и
              справляться с жизненными вызовами
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon
                    name="GraduationCap"
                    className="h-6 w-6 text-indigo-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Образование
                  </h3>
                  <p className="text-slate-600">
                    МГУ им. М.В. Ломоносова, факультет психологии
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon name="Award" className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Сертификации
                  </h3>
                  <p className="text-slate-600">
                    Гештальт-терапия, КПТ, системная семейная терапия
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon name="Users" className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Опыт работы
                  </h3>
                  <p className="text-slate-600">
                    Более 1000 успешных случаев индивидуальной и семейной
                    терапии
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Мой подход
              </h3>
              <p className="text-slate-600 mb-6">
                Верю, что каждый человек обладает внутренними ресурсами для
                изменений. Моя задача — создать безопасное пространство для их
                раскрытия.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Эмпатия</Badge>
                <Badge variant="secondary">Конфиденциальность</Badge>
                <Badge variant="secondary">Профессионализм</Badge>
                <Badge variant="secondary">Поддержка</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Комплексная психологическая помощь для разных возрастных групп и
              жизненных ситуаций
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="User" className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Индивидуальная терапия</CardTitle>
                <CardDescription>
                  Персональная работа с тревожностью, депрессией, самооценкой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Работа с тревожными расстройствами</li>
                  <li>• Преодоление депрессивных состояний</li>
                  <li>• Повышение самооценки</li>
                  <li>• Проработка травматического опыта</li>
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    от 3000₽
                  </span>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Семейная терапия</CardTitle>
                <CardDescription>
                  Работа с парами и семьями над отношениями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Решение семейных конфликтов</li>
                  <li>• Улучшение коммуникации</li>
                  <li>• Восстановление доверия</li>
                  <li>• Подготовка к браку</li>
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">
                    от 4500₽
                  </span>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Baby" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Детская психология</CardTitle>
                <CardDescription>
                  Специализированная помощь детям и подросткам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Адаптация к школе</li>
                  <li>• Поведенческие проблемы</li>
                  <li>• Тревожность у детей</li>
                  <li>• Подростковые кризисы</li>
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    от 2500₽
                  </span>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Блог
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полезные статьи о психическом здоровье, отношениях и саморазвитии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-indigo-100 text-indigo-800">
                  Психология
                </Badge>
                <CardTitle className="text-xl">
                  Как справиться с тревогой
                </CardTitle>
                <CardDescription>
                  Практические методы работы с тревожными состояниями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  <span>15 декабря 2024</span>
                </div>
                <Button
                  variant="ghost"
                  className="p-0 text-indigo-600 hover:text-indigo-700"
                >
                  Читать далее →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">
                  Отношения
                </Badge>
                <CardTitle className="text-xl">
                  Секреты здоровых отношений
                </CardTitle>
                <CardDescription>
                  Основы построения гармоничных отношений в паре
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  <span>10 декабря 2024</span>
                </div>
                <Button
                  variant="ghost"
                  className="p-0 text-indigo-600 hover:text-indigo-700"
                >
                  Читать далее →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">
                  Дети
                </Badge>
                <CardTitle className="text-xl">
                  Помощь ребенку в адаптации
                </CardTitle>
                <CardDescription>
                  Как помочь ребенку адаптироваться к новым условиям
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  <span>5 декабря 2024</span>
                </div>
                <Button
                  variant="ghost"
                  className="p-0 text-indigo-600 hover:text-indigo-700"
                >
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
            >
              Все статьи блога
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Свяжитесь со мной для записи на консультацию или задайте вопрос
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon name="MapPin" className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Адрес
                  </h3>
                  <p className="text-slate-600">
                    Москва, ул. Новый Арбат, 15
                    <br />
                    офис 304
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon name="Phone" className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Телефон
                  </h3>
                  <p className="text-slate-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon name="Mail" className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Email
                  </h3>
                  <p className="text-slate-600">anna@psychologist.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Режим работы
                  </h3>
                  <p className="text-slate-600">
                    Пн-Пт: 9:00-20:00
                    <br />
                    Сб: 10:00-18:00
                    <br />
                    Вс: выходной
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl">
                  Записаться на консультацию
                </CardTitle>
                <CardDescription>
                  Заполните форму, и я свяжусь с вами в течение дня
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Телефон
                    </label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите кратко ваш запрос..."
                      className="h-24"
                    />
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brain" className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold">Анна Кузнецова</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Профессиональный психолог с 10-летним опытом работы. Помогаю
                людям находить внутренний баланс и справляться с жизненными
                вызовами.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white"
                >
                  <Icon name="Phone" className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white"
                >
                  <Icon name="Mail" className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white"
                >
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Индивидуальная терапия</li>
                <li>Семейная терапия</li>
                <li>Детская психология</li>
                <li>Групповая терапия</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-slate-400">
                <li>О враче</li>
                <li>Методы работы</li>
                <li>Цены</li>
                <li>Отзывы</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Анна Кузнецова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
