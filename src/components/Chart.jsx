import React from 'react'
import data from '../data/dataDeDias'

function Chart() {
  // Calcular el valor más alto
  const maxAmount = Math.max(...data.map(item => item.amount));

  return (
    <section className="bg-white rounded-lg p-5">
      <h2 className="text-2xl color-dark-brown font-semibold">Spending - Last 7 days</h2>
      <div className="mt-10">
        {/* Contenedor principal con flexbox para las barras */}
        <div className="flex justify-between gap-2">
          {data.map((item) => {
            // Calcular la “altura” como fracción del maxAmount
            const height = Math.round((item.amount / maxAmount) * 100);

            return (
              <div
                key={item.day}
                className="flex flex-col justify-end items-center gap-2"
              >
                {/* Tooltip con monto */}
                <div className="bg-dark-brown px-2 py-1 rounded-lg text-white font-bold hidden">
                  ${item.amount}
                </div>
                {/* Barra con padding dinámico */}
                <div
                  id={`bar-${item.day}`}
                  className="bg-soft-red rounded-lg px-4 md:px-6 hover:cursor-pointer hover:opacity-70 active:bg-cyan"
                  style={{
                    // Estilo inline para replicar 'padding-top' y 'padding-bottom' al X%
                    paddingTop: `${height}%`,
                    paddingBottom: `${height}%`,
                  }}
                ></div>
                {/* Día de la semana */}
                <div className="font-light">{item.day}</div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className='text-cream my-5' />
      <div className='flex justify-between gap-4'>
        <div className='flex flex-col'>
          <h3 className='text-medium-brown text-sm'>Total this month</h3>
          <p className='text-dark-brown font-bold text-3xl'>$478.33</p>
        </div>
        <div className='flex flex-col text-right justify-end'>
          <p className=' text-dark-brown font-bold'>+2.4%</p>
          <p className='text-sm text-medium-brown'>from last month</p>
        </div>
      </div>
    </section>
  );
}

export default Chart;