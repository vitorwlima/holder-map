import React from 'react'
import { IAsset } from '../../interfaces'
import { Container } from './styles'

interface ITableProps {
  assets: IAsset[]
}

export const Table = ({ assets }: ITableProps) => {
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
          {assets.map(asset => (
            <tr key={asset.assetCode}>
              <td>{asset.assetCode}</td>
              <td>R$ {asset.price.toFixed(2)}</td>
              <td>R$ {asset.currentPrice.toFixed(2)}</td>
              <td>{(asset.profit * 100).toFixed(2)}%</td>
              <td>{asset.quantity}</td>
              <td>R$ {asset.totalInvested.toFixed(2)}</td>
              <td>R$ {asset.totalValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
