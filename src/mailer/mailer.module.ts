import { Module } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { WelcomeService } from './usermailer/welcome/welcome.service';
import { PasswordResetMailerService } from './usermailer/password-reset-mailer/password-reset-mailer.service';

@Module({
  providers: [SendgridService, WelcomeService, PasswordResetMailerService],
  exports: [WelcomeService, PasswordResetMailerService],
})
export class MailerModule {}
