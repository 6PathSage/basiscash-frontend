import React from 'react'
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import { useWallet } from 'use-wallet'

import farmer from '../../assets/img/farmer.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

import Farm from '../Farm'

import FarmCards from './FarmCards'

const Bank: React.FC = () => {
  const { path } = useRouteMatch()
  const { account, connect } = useWallet()
  return (
    <Switch>
      <Page>
      {!!account ? (
        <>
          <Route exact path={path}>
            <PageHeader
              icon={"🏦"}
              title="Pick a Bank."
              subtitle="Earn Basis Cash / Basis Shares by providing liquidity"
            />
            <FarmCards />
          </Route>
          <Route path={`${path}/:farmId`}>
             <Farm />
          </Route>
        </>
      ) : (
        <div style={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}>
          <Button
            onClick={() => connect('injected')}
            text="Unlock Wallet"
          />
        </div>
      )}
      </Page>
    </Switch>
  )
}


export default Bank