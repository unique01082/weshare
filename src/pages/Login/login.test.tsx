﻿import { TestBrowser } from '@@/testBrowser';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';

// @ts-ignore
import { startMock } from '@@/requestRecordMock';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let server: {
  close: () => void;
};

describe('Login Page', () => {
  beforeAll(async () => {
    server = await startMock({
      port: 8000,
      scene: 'login',
    });
  });

  afterAll(() => {
    server?.close();
  });

  it('should show login form', async () => {
    const historyRef = React.createRef<any>();
    const rootContainer = render(
      <TestBrowser
        historyRef={historyRef}
        location={{
          pathname: '/login',
        }}
      />,
    );

    await rootContainer.findAllByText('WeShare');

    act(() => {
      historyRef.current?.push('/login');
    });

    expect(rootContainer.baseElement?.querySelector('.ant-pro-form-login-desc')?.textContent).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit.',
    );

    expect(rootContainer.asFragment()).toMatchSnapshot();

    rootContainer.unmount();
  });

  it('should login success', async () => {
    const historyRef = React.createRef<any>();
    const rootContainer = render(
      <TestBrowser
        historyRef={historyRef}
        location={{
          pathname: '/login',
        }}
      />,
    );

    await rootContainer.findAllByText('WeShare');

    const userNameInput = await rootContainer.findByPlaceholderText('Username');

    act(() => {
      fireEvent.change(userNameInput, { target: { value: 'admin' } });
    });

    const passwordInput = await rootContainer.findByPlaceholderText('Password');

    act(() => {
      fireEvent.change(passwordInput, { target: { value: '111111' } });
    });

    await (await rootContainer.findByText('Login')).click();

    // 等待接口返回结果
    await waitTime(5000);

    // await rootContainer.findAllByText('Welcome to WeShare!');

    expect(rootContainer.asFragment()).toMatchSnapshot();

    await waitTime(2000);

    rootContainer.unmount();
  });
});
