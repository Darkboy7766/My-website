import React from 'react';

const PrivacyPolicy = () => {
  return ( 
    <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 md:px-8 text-slate-700 leading-relaxed font-sans">
      
      {/* Заглавна част */}
      <header className="mb-12 border-b-4 border-red-600 pb-6">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">
          Политика за поверителност
        </h1>
        <p className="font-medium text-slate-500 italic">
          Последна актуализация: 01.03.2026 г.
        </p>
      </header>

      <div className="space-y-12">
        
        {/* Въведение */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            на „Аутогаз Варна ООД“
          </h2>
          <p className="text-lg">
            В „Аутогаз Варна ООД“ (наричани по-долу „Ние“ или „Администраторът“) уважаваме Вашата поверителност и се ангажираме да защитаваме Вашите лични данни. Тази Политика за поверителност обяснява как събираме, използваме и съхраняваме Вашата информация, когато посещавате нашия уебсайт <span className="font-semibold text-red-600">autogas-varna.com</span>.
          </p>
        </section>

        {/* 1. Администратор */}
        <section className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-600 shadow-sm">
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase flex items-center'>
            <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Кой е администраторът на Вашите данни?
          </h3>
          <div className="space-y-2 text-md">
            <p><span className="font-bold text-slate-900">Фирма:</span> Аутогаз Варна ООД</p>
            <p><span className="font-bold text-slate-900">Адрес:</span> гр. Варна, бул. "Христо Смирненски"</p>
            <p><span className="font-bold text-slate-900">Имейл:</span> <a href="mailto:info@autogas-varna.com" className="text-red-600 hover:underline font-medium">info@autogas-varna.com</a></p>
            <p><span className="font-bold text-slate-900">Телефон:</span> <a href="tel:+35952501219" className="text-red-600 hover:underline font-medium">052 50 12 19</a></p>
          </div>
        </section>

        {/* 2. Лични данни */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase'>2. Какви лични данни събираме?</h3>
          <p className="mb-4">Ние събираме информация, която Вие предоставяте доброволно чрез формите за контакт или при записване на час за обслужване:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start bg-white border border-slate-200 p-3 rounded-lg">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <p><span className="font-bold">Идентификационни данни:</span> Име и фамилия.</p>
            </li>
            <li className="flex items-start bg-white border border-slate-200 p-3 rounded-lg">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <p><span className="font-bold">Данни за контакт:</span> Телефонен номер и имейл.</p>
            </li>
            <li className="flex items-start bg-white border border-slate-200 p-3 rounded-lg">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <p><span className="font-bold">Технически данни:</span> IP адрес, браузър и бисквитки.</p>
            </li>
            <li className="flex items-start bg-white border border-slate-200 p-3 rounded-lg">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <p><span className="font-bold">Данни за автомобила:</span> Марка и модел.</p>
            </li>
          </ul>
        </section>

        {/* 3. Цели */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase'>3. Цели на обработването</h3>
          
            <p>Вашите данни се обработват единствено за обработка на запитвания, записване на часове за монтаж/диагностика, директна комуникация и статистически анализ на трафика.</p>
          
        </section>

        {/* 4. Правно основание */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase'>4. Правно основание за обработка</h3>
          <p>Обработваме данните въз основа на преддоговорни отношения (за запитвания), легитимен интерес (функционалност на сайта) и Вашето изрично съгласие при изпращане на съобщение.</p>
        </section>

        {/* 5. Споделяне */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase'>5. Споделяне на информацията</h3>
          <p>Ние <span className="font-bold text-red-600 underline">не продаваме</span> Вашите данни. Споделяме ги само с доставчици на ИТ услуги/хостинг за поддръжка на сайта или с държавни органи при законово изискване.</p>
        </section>

        {/* 6. Съхранение */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase'>6. Съхранение на данните</h3>
          <p>Данните се съхраняват само за периода, необходим за изпълнение на Вашето запитване или съгласно законовите срокове.</p>
        </section>

        {/* 7. GDPR Права */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-4 uppercase'>7. Вашите права по GDPR</h3>
          <p className="mb-4">Имате право на достъп, коригиране, изтриване ("забравяне"), ограничаване на обработването и отказ от обработка по всяко време.</p>
          <p className="font-bold">За упражняване на тези права: <a href="mailto:info@autogas-varna.com" className="text-red-600 underline ml-1">info@autogas-varna.com</a></p>
        </section>

        {/* 8. Бисквитки */}
        <section>
          <h3 className='text-lg font-bold text-slate-900 mb-3 uppercase'>8. Използване на „бисквитки“</h3>
          <p>Сайтът използва „бисквитки“ за техническа функционалност. Можете да ги управлявате чрез настройките на Вашия браузър.</p>
        </section>

        {/* 9. Промени */}
        <footer className="pt-10 border-t border-slate-200">
          <h3 className='text-lg font-bold text-slate-900 mb-3 uppercase'>9. Промени в политиката</h3>
          <p className="text-sm text-slate-500">
            Запазваме правото си да актуализираме тази политика. Всички промени ще бъдат публикувани на тази страница.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default PrivacyPolicy;