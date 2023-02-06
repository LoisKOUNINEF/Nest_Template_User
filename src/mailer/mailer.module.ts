import { Module } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { WelcomeService } from './usermailer/welcome/welcome.service';
import { PasswordResetMailerService } from './usermailer/password-reset-mailer/password-reset-mailer.service';
import MailerParams from './mailer-params.helper';

@Module({
  providers: [
    SendgridService, 
    WelcomeService, 
    PasswordResetMailerService,
    MailerParams,
    ],
  exports: [WelcomeService, PasswordResetMailerService],
})
export class MailerModule {}
