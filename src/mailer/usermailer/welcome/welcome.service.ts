import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as hbs from 'handlebars';
import * as fs from 'fs';
import { SendgridService } from 'src/mailer/sendgrid.service';

@Injectable()
export class WelcomeService {
  constructor(
    private readonly sendgridService: SendgridService,
    private configService: ConfigService,
  ) {}

  public async sendWelcome(email: string) {
    const emailTemplate = fs
      .readFileSync('./dist/src/mailer/usermailer/welcome/welcome.hbs')
      .toString();

    const template = hbs.compile(emailTemplate);

    const messageBody = template({
      email: email,
      url: 'http://localhost:3000',
      mainImage: '',
    });

    const mail = {
      to: email,
      subject: 'Bienvenue !',
      from: this.configService.get('SENDGRID_SENDER'),
      html: messageBody,
    };

    return await this.sendgridService.send(mail);
  }
}
