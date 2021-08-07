import React from 'react'
import { Container } from './styles'

export const Table = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Preço médio</th>
            <th>Preço atual</th>
            <th>Lucro</th>
            <th>Número de ações</th>
            <th>Total investido</th>
            <th>Total atual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TAEE11</td>
            <td>R$ 32,48</td>
            <td>R$ 37,40</td>
            <td>+15,15%</td>
            <td>200</td>
            <td>R$ 6496,00</td>
            <td>R$ 7480,00</td>
          </tr>
          <tr>
            <td>TAEE11</td>
            <td>R$ 32,48</td>
            <td>R$ 37,40</td>
            <td>+15,15%</td>
            <td>200</td>
            <td>R$ 6496,00</td>
            <td>R$ 7480,00</td>
          </tr>
          <tr>
            <td>TAEE11</td>
            <td>R$ 32,48</td>
            <td>R$ 37,40</td>
            <td>+15,15%</td>
            <td>200</td>
            <td>R$ 6496,00</td>
            <td>R$ 7480,00</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
