import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: 'rgba(0, 204, 34, 1)', // Цвет трека
                height: '4px',
                '& .MuiSlider-thumb': {
                    height: '18px',
                    width: '18px',
                    backgroundColor: '#00CC22', // Цвет заднего фона ползунка
                    border: '1px solid #00CC22',
                    padding: '5px',
                    '&:hover': {
                        boxShadow: '0 0 0 10px rgba(25, 118, 210, 0.16)',
                    },

                },
                '& .MuiSlider-track': {
                    height: 10,
                    borderRadius: '10px', // Убедитесь, что трек имеет радиус границы
                },
                '& .MuiSlider-rail': {
                    height: 10,
                    borderRadius: '10px',
                    backgroundColor: '#d3d3d3',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
